import './UploadPage.css'
import { useState, ChangeEvent } from 'react'

const UploadPage = () => {
    const [files, setFiles] = useState<File[]>([])
    const [message, setMessage] = useState('')

    const handleFiles = (selected: FileList | null) => {
        if (!selected) return
        const arr = Array.from(selected)
        setFiles(arr)
        setMessage(`${arr.length} file(s) selected`)
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)

    const handleDrop = (e: any) => {
        e.preventDefault()
        handleFiles(e.dataTransfer.files)
    }

    const handleDragOver = (e: any) => e.preventDefault()

    const handleUpload = () => {
        // Placeholder: implement real upload logic.
        if (files.length === 0) {
            setMessage('Choose files to upload')
            return
        }
        setMessage('Uploading...')
        setTimeout(() => setMessage('Upload complete — files queued for RAG ingestion (demo)'), 900)
    }

    return (
        <main className="upload-page">
            <section className="glass-panel upload-panel" onDrop={handleDrop} onDragOver={handleDragOver}>
                <div className="upload-panel__header">
                    <p className="upload-eyebrow">RAG Tools</p>
                    <h2 className="upload-title">Upload documents for RAG</h2>
                    <p className="upload-sub">Drop PDF / TXT / DOCX files here or choose from your device.</p>
                </div>

                <div className="upload-dropzone" onDrop={handleDrop} onDragOver={handleDragOver}>
                    <input id="fileInput" type="file" multiple onChange={handleInput} />
                    <label htmlFor="fileInput">Click to choose files or drag them here</label>
                </div>

                <div className="upload-actions">
                    <button className="primary" onClick={handleUpload}>Start upload</button>
                    <div className="upload-message">{message}</div>
                </div>

                {files.length > 0 && (
                    <div className="upload-list">
                        {files.map((f) => (
                            <div key={f.name} className="upload-list__item">
                                <strong>{f.name}</strong>
                                <span>{(f.size / 1024).toFixed(1)} KB</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}

export default UploadPage
