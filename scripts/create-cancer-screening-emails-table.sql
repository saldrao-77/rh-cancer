-- Create the cancer_screening_emails table
CREATE TABLE IF NOT EXISTS cancer_screening_emails (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_cancer_screening_emails_email ON cancer_screening_emails(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_cancer_screening_emails_created_at ON cancer_screening_emails(created_at);

-- Add a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cancer_screening_emails_updated_at 
    BEFORE UPDATE ON cancer_screening_emails 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
