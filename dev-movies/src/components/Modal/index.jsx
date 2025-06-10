import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Background } from "./styles";


function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get(`/movie/${movieId}/videos`);
    
            setMovie(results[0]);
        }
        getMovies();
    }, [movieId]); { /*Adicione movieId como dependência para evitar problemas de atualização.*/}
    
    
    return (
        <Background onClick={() => setShowModal(false)}>
           { /*para pegar só quando encontrar o movie.key e não dar pau*/}
            {movie && (
                <Container>
                <iframe
                    src={`https://www.youtube.com/embed/${movie?.key}`}
                    title="YouTube Video Player"
                    height="500px"
                    width="100%"
                ></iframe>
                </Container>
            )}
        </Background>
    )
}
export default Modal;