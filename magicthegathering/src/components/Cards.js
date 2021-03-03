import {useState, useEffect} from 'react';
import { API } from '../utils/uris';
import axios from 'axios';
import Card from './Card';

function CardList() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await axios.get(`${API}/cards`);
            console.log(response);
          if (response.status === 200) {
            setCards(response.data.cards);
          } else {
            setError('An error occured');
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>ERROR: An error occured</div>;
    }
  
    return (
      <>
        {cards.map(card => {
            return (
                <Card
                key={card.id}
                imageUrl={card.imageUrl}
                name={card.name}
                rarity={card.rarity}
                />
            );
        })}
      </>
    );
  }
  
  export default CardList;
