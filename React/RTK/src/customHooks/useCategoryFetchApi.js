import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY
const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL

export default function useCategoryFetch(categoryName){
  const Navigate=useNavigate()
  const [data,setData]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [isError,setIsError]=useState(false)
  const [error,setError]=useState()

  const getApiData = async () => {
    const fetchInfo = {
      headers: {
        "x-api-key": VITE_CAT_API_KEY
      }
    }
    const response = await fetch(
      `${VITE_CAT_API_URL}/images/search?limit=10&breed_ids=${categoryName}`,
      fetchInfo
    )
    const responseData = await response.json()
    if (!response.ok) {
      setIsError(true)
      setError("Veri alınamadı")
      throw new Error("Veri alınamadı")
    }
    if (responseData.length <1){
      
      setError("Veri alınamadı")
      setIsError(true)


    }
   

    setData(responseData)
    setIsLoading(false)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return [data, isLoading, isError, error]
}