import { useRouter } from 'next/router';
import React from 'react'

const blogNo = () => {
const router = useRouter()
const blogNumber = router.query.blogNo;
  return (
    <>
      <h1>My {blogNumber} content </h1>
    </>
  )
}

export default blogNo;