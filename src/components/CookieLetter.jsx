

const CookieLetter = ({ thumb, id, index }) => {
    const styles = {
        transform: `rotate(${46 * index}deg) translate(195px) rotate(-${46 * index}deg)`,
        borderRadius: '50%'
    }
    return (
        <li style={styles}>
            <div id={id} className="characters-thumb" style={{ backgroundImage: 'url(' + thumb + ')', backgroundSize: 'cover' }}>

            </div>
        </li>
    )
}

export default CookieLetter