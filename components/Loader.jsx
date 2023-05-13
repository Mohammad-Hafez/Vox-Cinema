import { useRouter } from 'next/router'
import Loader from 'react-loader-spinner'

export default function PageLoader() {
  const router = useRouter()

  console.log(router.isFallback) 

  if (router.isFallback) {
    return (
      <div className="page-loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    )
  }
  return null
}