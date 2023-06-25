

const CookieLetter = ({ thumb, id, index, selection }) => {
    const styles = {
        transform: `rotate(${46 * index}deg) translate(195px) rotate(-${46 * index}deg)`,
        borderRadius: '50%',
        backgroundColor: selection.find(i => i.id === id) ? "rgba(255, 0, 0, 0.5)" : "transparent"
    }
    return (
        <li style={styles}>
            <div id={id} className="characters-thumb" style={{ backgroundImage: 'url(' + thumb + ')', backgroundSize: 'cover' }}>

            </div>
        </li>
    )
}

export default CookieLetter