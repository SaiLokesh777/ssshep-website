import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Download, User, FileText, Briefcase } from 'lucide-react';
import { useApp } from '../AppContext';

const AlumniProfile = () => {
  const { id } = useParams();
  const { alumni, isAdminLoggedIn } = useApp();
  const navigate = useNavigate();
  const alum = alumni.find(a => a.id === Number(id));

  if (!alum) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Alumni not found.</p>
          <Link to="/alumni" className="text-saffron-600 hover:underline">← Back to Alumni</Link>
        </div>
      </div>
    );
  }

  // Split about text into paragraphs by newline
  const paragraphs = (alum.about || '').split('\n').filter(p => p.trim() !== '');

  const downloadPDF = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 14;
    const contentWidth = pageW - margin * 2;

    // Header bar
    doc.setFillColor(30, 42, 74);
    doc.rect(0, 0, pageW, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('SSSHEP', margin, 16);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Sri Sathya Sai Prema Seva Sadan', margin, 24);
    doc.text('Vanasthalipuram, Hyderabad 500070', margin, 31);

    // Passport image - top right
    const imgX = pageW - 50;
    const imgY = 48;
    const imgW = 35;
    const imgH = 44;

    if (alum.image) {
      try {
        doc.addImage(alum.image, 'JPEG', imgX, imgY, imgW, imgH);
        doc.setDrawColor(200, 200, 200);
        doc.rect(imgX, imgY, imgW, imgH);
      } catch (e) {
        doc.setFillColor(240, 240, 240);
        doc.rect(imgX, imgY, imgW, imgH, 'F');
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(8);
        doc.text('No Photo', imgX + 6, imgY + 24);
      }
    } else {
      doc.setFillColor(240, 240, 240);
      doc.rect(imgX, imgY, imgW, imgH, 'F');
      doc.setTextColor(150, 150, 150);
      doc.setFontSize(8);
      doc.text('No Photo', imgX + 6, imgY + 24);
    }

    // Name
    doc.setTextColor(30, 42, 74);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text(alum.name, margin, 56);

    // Profession
    if (alum.profession) {
      doc.setFontSize(11);
      doc.setTextColor(200, 80, 0);
      doc.setFont('helvetica', 'bold');
      doc.text(alum.profession, margin, 65);
    }

    // Passing year
    if (alum.passingYear) {
      doc.setFontSize(9);
      doc.setTextColor(120, 120, 120);
      doc.setFont('helvetica', 'normal');
      doc.text(`Passing Year: ${alum.passingYear}`, margin, 73);
    }

    // Divider line
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, 100, pageW - margin, 100);

    // ABOUT heading
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('ABOUT', margin, 108);
    doc.setDrawColor(255, 125, 10);
    doc.setLineWidth(0.8);
    doc.line(margin, 110, margin + 20, 110);
    doc.setLineWidth(0.2);

    // Paragraphs with proper spacing
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);

    let currentY = 118;
    const lineHeight = 5.5;
    const paragraphGap = 4;

    paragraphs.forEach((para) => {
      const lines = doc.splitTextToSize(para.trim(), contentWidth);
      lines.forEach((line) => {
        if (currentY > 270) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(line, margin, currentY);
        currentY += lineHeight;
      });
      currentY += paragraphGap; // gap between paragraphs
    });

    // Footer
    doc.setFillColor(248, 248, 248);
    doc.rect(0, 278, pageW, 19, 'F');
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(8);
    doc.text('SSSHEP — Sri Sathya Sai Prema Seva Sadan | contact@ssshep.org', margin, 287);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageW - 50, 287);

    doc.save(`${alum.name.replace(/\s+/g, '_')}_Alumni_Profile.pdf`);
  };

  const downloadWord = async () => {
    const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, HeadingLevel } = await import('docx');
    const { saveAs } = await import('file-saver');

    const children = [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'SSSHEP — Sri Sathya Sai Prema Seva Sadan', bold: true, size: 28, color: '1e2a4a' })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Vanasthalipuram, Hyderabad 500070', size: 18, color: '666666' })]
      }),
      new Paragraph({ children: [new TextRun({ text: '' })] }),
      new Paragraph({
        children: [new TextRun({ text: alum.name, bold: true, size: 40, color: '1e2a4a' })]
      }),
    ];

    if (alum.profession) {
      children.push(new Paragraph({
        children: [new TextRun({ text: alum.profession, size: 24, color: 'ff7d0a', bold: true })]
      }));
    }

    if (alum.passingYear) {
      children.push(new Paragraph({
        children: [new TextRun({ text: `Passing Year: ${alum.passingYear}`, size: 20, color: '888888' })]
      }));
    }

    // Passport image
    if (alum.image) {
      try {
        const base64Data = alum.image.split(',')[1];
        const byteChars = atob(base64Data);
        const byteArr = new Uint8Array(byteChars.length);
        for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
        children.push(new Paragraph({
          children: [new ImageRun({ data: byteArr, transformation: { width: 120, height: 150 }, type: 'jpg' })]
        }));
      } catch (e) {}
    }

    children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
    children.push(new Paragraph({
      children: [new TextRun({ text: 'About', bold: true, size: 26, color: '1e2a4a' })]
    }));

    // Each paragraph as separate Word paragraph
    paragraphs.forEach(para => {
      children.push(new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun({ text: para.trim(), size: 20 })]
      }));
    });

    children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: 'SSSHEP | contact@ssshep.org', size: 18, color: '999999', italics: true })]
    }));

    const doc = new Document({ sections: [{ children }] });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${alum.name.replace(/\s+/g, '_')}_Alumni_Profile.docx`);
  };

  return (
    <div className="page-transition pt-20 min-h-screen bg-[#fdfaf5]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button onClick={() => navigate('/alumni')} className="flex items-center gap-2 text-gray-500 hover:text-saffron-600 transition-colors mb-6 text-sm">
          <ArrowLeft size={16} /> Back to Alumni
        </button>
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-saffron-500 to-sacred-400"></div>
          <div className="p-8">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-saffron-200 shadow-lg bg-gradient-to-br from-saffron-50 to-sacred-50">
                  {alum.image ? (
                    <img src={alum.image} alt={alum.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-saffron-300">
                      <User size={40} />
                    </div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs bg-forest-50 text-forest-700 px-2 py-0.5 rounded-full border border-forest-200">Alumni</span>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-display text-3xl font-bold text-navy-900 mb-1">{alum.name}</h1>
                {alum.profession && (
                  <div className="flex items-center gap-1.5 text-saffron-600 font-medium mb-1">
                    <Briefcase size={14} />{alum.profession}
                  </div>
                )}
                {alum.passingYear && <p className="text-gray-400 text-sm mb-4">Passing Year: {alum.passingYear}</p>}
                <div className="h-0.5 bg-gradient-to-r from-saffron-200 to-transparent mb-4"></div>
                <h3 className="font-semibold text-navy-800 mb-3 text-sm uppercase tracking-wide">About</h3>
                {/* Each paragraph rendered separately */}
                <div className="space-y-3">
                  {paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              {isAdminLoggedIn && (
                <Link to="/admin" state={{ section: 'alumni', editId: alum.id }}
                  className="flex items-center gap-2 px-4 py-2 bg-navy-900 text-white text-sm rounded-lg hover:bg-navy-800 transition-colors">
                  <Edit size={14} /> Edit Profile
                </Link>
              )}
            </div>
            <div className="flex gap-3">
              <button onClick={downloadPDF} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                <Download size={14} /> Download PDF
              </button>
              <button onClick={downloadWord} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                <FileText size={14} /> Download Word
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;
