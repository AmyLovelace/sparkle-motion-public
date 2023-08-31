import React, { SetStateAction, useEffect, useState } from 'react';
import 'regenerator-runtime/runtime'
import { actions } from '@/clients/api';
import "@/components/Background/SparkleMotion.css"
import SpeechRecognition, {
    useSpeechRecognition,
    ListeningOptions,
} from 'react-speech-recognition';
import ParticleBackground from '@/components/Background/ParticleBackground';
import MessageCard from '@/components/Card/MessageCard';
import options from '@/components/Background/options';
import HistoryPanel from '@/components/History/History';
import useStyles from '@/components/styles/styles'
import ContainedButtons from '@/components/Buttons/Create';
import { t } from 'i18next';
import MyMenu from './Buttons/DropdownMenu';


const SparkleMotion: React.FC = () => {
    const classes = useStyles();
    const [message, setMessage] = useState('')
    const [showHistory, setShowHistory] = useState(false);
    const [messageHistory, setMessageHistory] = useState<{ transcript: string; message: string; }[]>([]);

    const commands = [
        {
            command: 'I would like to order *',
            callback: (food: string) => setMessage(`Your order is for: ${food}`)
        },
        {
            command: 'The weather is :condition today',
            callback: (condition: string) => setMessage(`Today, the weather is ${condition}`)
        },
        {
            command: 'My top sports are * and *',
            callback: (sport1: string, sport2: string) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
        },
        {
            command: 'Pass the salt (please)',
            callback: () => setMessage('My pleasure')
        },
        {
            command: ['Hello', 'Hi'],
            callback: ({ command }: any) => setMessage(`Hi there! You said: "${command}"`),
            matchInterim: true
        },
        {
            command: 'Beijing',
            callback: (command: string, spokenPhrase: string, similarityRatio: number) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2
        },
        {
            command: ['eat', 'sleep', 'leave'],
            callback: (command: string) => setMessage(`Best matching command: ${command}`),
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2,
            bestMatchOnly: true
        },
        {
            command: 'clear',
            callback: ({ resetTranscript }: any) => resetTranscript()
        },

    ]
    useEffect(() => {
        addToHistory();
    }, [message]);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition({ commands });

    if (!browserSupportsSpeechRecognition) {
        return <span>{t('browserNotSupportSpeech')}</span>;
    }

    const startListening = (event: any) => {
        SpeechRecognition.startListening();
        setMessage('');

    };

    const stopListening = (event: any) => {
        SpeechRecognition.stopListening();
        setMessage('');

    };
    const resetMessage = () => {
        setMessage('');
    };
    const addToHistory = () => {
        if (message !== '') {
            setMessageHistory((prevHistory) => [...prevHistory, { transcript, message: message }]);
        }
    };


    return (
        <div>
            <ContainedButtons
                listening={listening}
                startListening={startListening}
                stopListening={stopListening}
                resetTranscript={resetTranscript}
                resetMessage={() => resetMessage()}
            />
            <div className={classes.messageCardContainer}>
                {(transcript !== '' || message !== '') && (
                    <MessageCard transcript={transcript} message={message} show={true} />
                )}
            </div>
            <ParticleBackground options={options}></ParticleBackground>
            <MyMenu toggleHistory={() => setShowHistory(!showHistory)} />
            {showHistory && <HistoryPanel history={messageHistory} />}
        </div>
    );
};

export default SparkleMotion;
