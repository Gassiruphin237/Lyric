
import React, { useState } from 'react';
import { fetchLyrics } from '../services/Lyric';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import "../css/Lyric.css"

const Lyric = () => {

    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false); 

    const handleFetchLyrics = async () => {
        setLoading(true);
        setError('');

        try {
            const lyrics = await fetchLyrics(artist, title);
            setLyrics(lyrics);
            setModalVisible(true); 
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };
    
    const close = () => {
        setModalVisible(false)
        setArtist("")
        setTitle("")
    }

    // const downloadPDF = () => {
    //     html2canvas(document.querySelector("#lyricsContent")).then(canvas => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF();
    //         pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
    //         pdf.save('lyrics.pdf');
    //     });
    // };

    return (
        <div className='container'>
            <h3>Recherche les Lyric de ton Artiste</h3>
            <div className='input'>
                <input
                    type="text"
                    placeholder="Nom de l'artiste"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Titre du song"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div><br />
            <button onClick={handleFetchLyrics}>Rechercher</button>
            {loading && <div class="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
            }
            {error && <p className='error'>{error}</p>}
            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                    <span className="close" onClick={() => close()}>&times;</span>
                        <h2>Lyrics</h2>
                        <pre id="lyricsContent">{lyrics}</pre>
                        <button onClick={() => navigator.clipboard.writeText(lyrics)}>Copier</button>&nbsp;&nbsp;
                        {/* <button onClick={downloadPDF}>Télécharger PDF</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lyric;

