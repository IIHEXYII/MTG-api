const Card = prop => {
    const{ name, imageUrl, rarity } = prop;

    const rarityClass = () => {

        switch (rarity) {
            case 'Common':
                return 'common';
            case 'Uncommon':
                return 'uncommon';
            case 'Rare':
                return 'rare';
            case 'MythicalRare':
                return 'mythicalRare';
            default:
                return '';
        }
    };
    rarityClass();
    return (
        <div className="cardContainer" className={rarityClass()} >
            <div className="cardContent">
            <img className="cardContent__image" src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{rarity}</p>
            </div>
        </div>
    );
};

export default Card;