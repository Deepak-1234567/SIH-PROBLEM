# Example legal document template
legal_template = """
Legal Document

Client: {client_name}
Case Number: {case_number}

Agreement:

{legal_content}

Sincerely,

[Your Name]
[Your Law Firm]
[Date]
"""

# Function to generate a legal document
def generate_legal_document(client_name, case_number, legal_content):
    document = legal_template.format(
        client_name=client_name,
        case_number=case_number,
        legal_content=legal_content
    )
    return document

# Example usage:
client_name = "John Doe"
case_number = "12345"
legal_content = "This is the legal content of the document."

generated_document = generate_legal_document(client_name, case_number, legal_content)

# Print or save the generated document
print(generated_document)