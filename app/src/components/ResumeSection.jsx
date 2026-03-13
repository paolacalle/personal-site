import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "@/assets/resume2.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const ResumeSection = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(800);

    useEffect(() => {
    const updateWidth = () => {
        if (window.innerWidth < 640) {
            setPageWidth(300);
        } else if (window.innerWidth < 768) {
            setPageWidth(420);
        } else if (window.innerWidth < 1024) {
            setPageWidth(600);
        } else {
        setPageWidth(800);
        }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    }

    function onDocumentLoadSuccess({ numPages }) {
        console.log("PDF pages:", numPages);
        setNumPages(numPages);
    }

    return (
    <section
        id="resume"
        className="py-20 px-4 md:px-8 bg-secondary/30"
    >
        <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Resume</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick overview of my experience, projects, and technical background.
            </p>
        </div>

        <div className="flex justify-center mb-8">
            <a
            href={resumePDF}
            download
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white font-medium shadow-md transition hover:scale-105 hover:shadow-lg"
            >
            Download Resume
            </a>
        </div>

        <div className="rounded-2xl bg-white shadow-2xl border border-border p-4 md:p-8 overflow-hidden">
            <Document
            file={resumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
                <p className="text-center text-sm text-muted-foreground">
                Loading resume...
                </p>
            }
            error={
                <p className="text-center text-sm text-red-500">
                Failed to load resume preview.
                </p>
            }
            >
            <div className="space-y-6">
                {/* only the first page */}
                {numPages && (
                    <div className="flex justify-center">
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <Page pageNumber={1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                    </div>
                    </div>
                )}
            </div>
            </Document>
        </div>
        </div>
    </section>
    );
};