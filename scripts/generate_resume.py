import os

def create_resume():
    os.makedirs('public', exist_ok=True)
    
    # We build a valid standard PDF 1.4 document
    # Using Helvetica and Helvetica-Bold
    content_lines = []
    
    def add_text(font, size, x, y, text):
        escaped = text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        content_lines.append(f"BT /{font} {size} Tf {x} {y} Td ({escaped}) Tj ET")

    # Header
    add_text("F2", 20, 50, 750, "GALLA MOHAN SAI")
    add_text("F1", 11, 50, 734, "Full Stack Developer | AI/ML Enthusiast")
    add_text("F1", 10, 50, 718, "GitHub: https://github.com/MOHAN9818  |  Amaravati, Andhra Pradesh, India")
    
    # Line separator
    content_lines.append("50 710 m 562 710 l S")

    # Education Section
    add_text("F2", 13, 50, 690, "EDUCATION")
    add_text("F2", 10, 50, 672, "VIT-AP University, Amaravati, Andhra Pradesh")
    add_text("F1", 10, 430, 672, "2023 - 2027 (Pursuing)")
    add_text("F1", 10, 60, 658, "Bachelor of Technology in Computer Science and Engineering")

    add_text("F2", 10, 50, 640, "Intermediate Education")
    add_text("F1", 10, 430, 640, "2021 - 2023")
    add_text("F1", 10, 60, 626, "Score: 96.5% (Strong foundation in Mathematics and Sciences)")

    # Technical Skills Section
    add_text("F2", 13, 50, 598, "TECHNICAL SKILLS")
    add_text("F2", 10, 50, 580, "Languages:")
    add_text("F1", 10, 150, 580, "Java, JavaScript")
    add_text("F2", 10, 50, 564, "Frontend:")
    add_text("F1", 10, 150, 564, "React.js, HTML5, CSS3, Responsive Web Design")
    add_text("F2", 10, 50, 548, "Backend:")
    add_text("F1", 10, 150, 548, "Node.js, Express.js, REST APIs, JWT Authentication")
    add_text("F2", 10, 50, 532, "Databases:")
    add_text("F1", 10, 150, 532, "MongoDB, Mongoose")
    add_text("F2", 10, 50, 516, "AI / Machine Learning:")
    add_text("F1", 10, 150, 516, "Generative AI, Google Gemini API, RAG, Semantic Embeddings")
    add_text("F2", 10, 50, 500, "Tools & Platforms:")
    add_text("F1", 10, 150, 500, "Git, GitHub, Vercel, Render, Postman")

    # Featured Projects Section
    add_text("F2", 13, 50, 472, "FEATURED PROJECTS")
    
    # Project 1: AI Mock Interviewer
    add_text("F2", 10, 50, 454, "AI Mock Interviewer")
    add_text("F1", 9, 160, 454, "| React.js, Node.js, Express, MongoDB, Gemini API, RAG, JWT")
    add_text("F1", 9, 60, 440, "- AI-driven platform for role-specific interview simulation and feedback")
    add_text("F1", 9, 60, 428, "- Implements RAG for contextual question generation and performance evaluation")
    add_text("F1", 9, 60, 416, "- Features scoring breakdown, interview history tracking, and downloadable PDF reports")

    # Project 2: Fin Tracker
    add_text("F2", 10, 50, 396, "Fin Tracker - Expense Tracking System")
    add_text("F1", 9, 235, 396, "| React.js, Node.js, Express, MongoDB, Mongoose, JWT")
    add_text("F1", 9, 60, 382, "- Full-stack expense management application with JWT authentication")
    add_text("F1", 9, 60, 370, "- Financial dashboard with income/expense metrics, savings-rate visualization")
    add_text("F1", 9, 60, 358, "- Transaction categorization and automated reminder alerts")

    # Project 3: X Clone
    add_text("F2", 10, 50, 338, "X Clone - Social Media Interface")
    add_text("F1", 9, 215, 338, "| React.js, JavaScript, HTML5, CSS3")
    add_text("F1", 9, 60, 324, "- Responsive social web application with dynamic feed, user profiles, and post creation")

    # Certifications and Internship
    add_text("F2", 13, 50, 294, "CERTIFICATIONS & EXPERIENCE")
    add_text("F2", 10, 50, 276, "MERN Full Stack Web Development Certification")
    add_text("F1", 9, 60, 262, "- Comprehensive development and deployment with React, Node.js, Express, and MongoDB")
    add_text("F2", 10, 50, 244, "Prodigy InfoTech - Web Development Internship")
    add_text("F1", 9, 60, 230, "- Practical frontend application engineering; awarded official Letter of Recommendation")
    add_text("F2", 10, 50, 212, "NPTEL: AI Search Methods for Problem Solving")
    add_text("F1", 9, 60, 198, "- Academic certification covering heuristic search, state space search, and optimization (Score: 60/100)")

    # Footer note
    content_lines.append("0.5 w [2 2] 0 d 50 140 m 562 140 l S [] 0 d")
    add_text("F1", 8, 50, 120, "Note: This resume is generated from verified portfolio data.")
    add_text("F1", 8, 50, 108, "To replace with an updated version, place your PDF at: public/resume.pdf")

    stream_content = "\n".join(content_lines)
    stream_bytes = stream_content.encode('latin1')
    stream_len = len(stream_bytes)

    objects = []
    
    # 1: Catalog
    objects.append("<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>")
    # 4: Font F1 (Helvetica)
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    # 5: Font F2 (Helvetica-Bold)
    objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # 6: Contents stream
    objects.append(f"<< /Length {stream_len} >>\nstream\n{stream_content}\nendstream")

    pdf_out = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(pdf_out))
        pdf_out.extend(f"{i} 0 obj\n{obj}\nendobj\n".encode('latin1'))

    xref_offset = len(pdf_out)
    num_objs = len(objects) + 1
    pdf_out.extend(f"xref\n0 {num_objs}\n0000000000 65535 f \n".encode('latin1'))
    for off in offsets[1:]:
        pdf_out.extend(f"{off:010d} 00000 n \n".encode('latin1'))

    pdf_out.extend(f"trailer\n<< /Size {num_objs} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode('latin1'))

    output_path = os.path.join('public', 'resume.pdf')
    with open(output_path, 'wb') as f:
        f.write(pdf_out)

    print(f"Generated valid resume at {output_path} ({len(pdf_out)} bytes)")

if __name__ == '__main__':
    create_resume()
