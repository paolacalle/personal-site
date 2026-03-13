import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";
import resumePDF from "@/assets/resume2.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


export const ResumeDownloadButton = () => {
    return (<a href={resumePDF} download className="cosmic-button">
        Download Resume
    </a>)
}


export const ResumeSection = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(800);

    // State to control the current stage of the resume animation
    // initially, it's in the "moon" stage, then transitions to "opening", then "resume", then "closing", and finally "gone"
    const [stage, setStage] = useState("moon"); // moon | opening | resume | closing | gone

    useEffect(() => {
    const updateWidth = () => {
        if (window.innerWidth < 640) {
        setPageWidth(300);
        } else if (window.innerWidth < 768) {
        setPageWidth(420);
        } else if (window.innerWidth < 1024) {
        setPageWidth(600);
        } else {
        setPageWidth(660);
        }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function handleClose() {
        setStage("closing");
        setTimeout(() => setStage("moon"), 1700);
    }

    function handleReopen() {
        setStage("moon");
        setTimeout(() => setStage("opening"), 80);
        setTimeout(() => setStage("resume"), 1800);
    }

    const shellVariants = {
        moon: {
            width: 280,
            height: 280,
            borderRadius: "9999px",
            scale: 1,
            opacity: 1,
            boxShadow:
            "0 0 40px rgba(255,255,255,0.16), 0 0 90px rgba(180,200,255,0.12), 0 0 150px rgba(255,255,255,0.08)",
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
        },

        opening: {
            width: pageWidth + 80,
            height: pageWidth < 300 ? 430 : pageWidth < 400 ? 580 : 820,
            borderRadius: "24px",
            scale: 1.02,
            opacity: 1,
            boxShadow:
            "0 0 30px rgba(255,255,255,0.10), 0 24px 60px rgba(0,0,0,0.28)",
            transition: { duration: 1.8, ease: [0.77, 0, 0.175, 1] },
        },

        resume: {
            width: pageWidth + 80,
            height: pageWidth < 300 ? 430 : pageWidth < 400 ? 580 : 820,
            borderRadius: "24px",
            scale: 1,
            opacity: 1,
            boxShadow:
            "0 0 22px rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.34)",
            transition: { duration: 0.5, ease: "easeOut" },
        },

        closing: {
            width: 280,
            height: 280,
            borderRadius: "9999px",
            scale: 0.92,
            opacity: 0.95,
            boxShadow:
            "0 0 50px rgba(255,255,255,0.18), 0 0 110px rgba(180,200,255,0.14), 0 0 180px rgba(255,255,255,0.1)",
            transition: { duration: 1.6, ease: [0.77, 0, 0.175, 1] },
        },
    };

    return (
        <section id="resume" className="resume-section">
            {/* header  */}
            <h2 className="text-3xl md:text-4xl font-bold text-center w-full">
                My <span className="text-primary">Resume</span>
            </h2>

            {/* buttons logic  */}
            <div className="justify-center flex pt-8">

                <div className="justify-center">
                    {stage === "resume" && (
                        <a
                            onClick={handleClose}
                            className="cosmic-button"
                            aria-label="Close resume preview"
                        >
                            Close Preview
                        </a>
                    )}
                    {stage === "moon" && (
                        <a
                            onClick={handleReopen}
                            className="cosmic-button"
                            aria-label="Reopen resume preview"
                        >
                            Open Preview
                        </a>
                    )}
                </div>
            </div>

            <div className="resume-content max-w-5xl mx-auto">
                <div className="resume-scene">
                    <AnimatePresence mode="wait">
                    {stage !== "gone" && (

                        <motion.div
                            key="transform-shell"
                            className="resume-transform-shell"
                            variants={shellVariants}
                            initial="moon"
                            animate={stage}
                        >
                            <motion.div
                                className="moon-surface"
                                animate={{
                                opacity:
                                    stage === "moon"
                                    ? 1
                                    : stage === "opening"
                                    ? 0.55
                                    : stage === "resume"
                                    ? 0
                                    : 0.8,
                                rotate:
                                    stage === "moon"
                                    ? 0
                                    : stage === "opening"
                                    ? 35
                                    : stage === "resume"
                                    ? 50
                                    : 360,
                                scale:
                                    stage === "resume"
                                    ? 1.06
                                    : stage === "closing"
                                    ? 1
                                    : 1,
                                }}
                                transition={{ duration: 1.4, ease: "easeInOut" }}
                            >

                                <div className="moon-crater crater-1" />
                                <div className="moon-crater crater-2" />
                                <div className="moon-crater crater-3" />
                                <div className="moon-crater crater-4" />

                            </motion.div>

                            <motion.div
                                className="resume-inner"
                                animate={{
                                opacity:
                                    stage === "opening"
                                    ? 0.45
                                    : stage === "resume"
                                    ? 1
                                    : stage === "closing"
                                    ? 0
                                    : 0,
                                scale:
                                    stage === "opening"
                                    ? 0.95
                                    : stage === "resume"
                                    ? 1
                                    : 0.88,
                                clipPath:
                                    stage === "resume"
                                    ? "inset(0% 0% 0% 0% round 18px)"
                                    : stage === "opening"
                                    ? "inset(18% 18% 18% 18% round 999px)"
                                    : "inset(36% 36% 36% 36% round 999px)",
                                }}
                                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                                >
                                    <div className="resume-card rounded-2xl bg-white shadow-2xl border border-border p-4 md:p-8 overflow-hidden">
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
                                        {numPages && (
                                            <div className="flex justify-center">
                                            <div className="shadow-lg rounded-lg overflow-hidden">
                                                <Page
                                                pageNumber={1}
                                                width={pageWidth}
                                                renderTextLayer={false}
                                                renderAnnotationLayer={false}
                                                />
                                            </div>
                                            </div>
                                        )}
                                        </Document>
                                    </div>
                                </motion.div>
                            </motion.div>
                            
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
};