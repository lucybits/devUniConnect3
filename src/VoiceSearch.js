import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';

const VoiceSearch = ({ onVoiceSearchResult }) => {
    const [listening, setListening] = useState(false);

    const startListening = () => {
        setListening(true);
        const recognition = new window.webkitSpeechRecognition(); 
        recognition.lang = 'es-ES'; 
        recognition.onresult = (event) => {
            const voiceText = event.results[0][0].transcript; 
            onVoiceSearchResult(voiceText); 
            setListening(false);
        };
        recognition.start();
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {listening ? (
                <span>Escuchando...</span>
            ) : (
                <button
                    onClick={startListening}
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MicIcon style={{ color: '#451B95', fontSize: 30 }} />
                </button>
            )}
        </div>
    );
};

export default VoiceSearch;
