import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {

    change(progress);

    const parentDiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
    }

    const childDiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
    }

    const progressText = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={parentDiv}>
            <div style={childDiv}>
                <span style={progressText}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

function change(e) {
    switch(true){
        case (e.value<=25):
            Progress_bar.prototype.bgcolor= "#e32424";
            break;

        case (e.value>25 && e.value<=50):
            Progress_bar.prototype.bgcolor="#e68e1c"
            break;

        case (e.value>51 && e.value<=75):
            Progress_bar.prototype.bgcolor="#e6dc1c"
            break;

        case (e.value>76 && e.value<=100):
            Progress_bar.prototype.bgcolor="#32c728"
            break;
    }
}

export default Progress_bar;
