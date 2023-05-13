import { useFavorites } from "@/utils/favContext"
export default function AddToFavorites({ id }) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.includes(id)
  const handleFavoriteClick = () => {
    toggleFavorite(id)
  }
  return (
    <button className='btn btn-danger btn-sm fs-6 fav-btn' onClick={handleFavoriteClick}>
      {isFavorite ? 'Remove from ' : 'Add to '} <span><i className="fa-solid fa-heart"></i></span>
    </button>
  )
}
