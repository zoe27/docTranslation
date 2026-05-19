import type { GetServerSideProps } from 'next'
import { EXPERIENCE_URL } from '@/lib/site'

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: EXPERIENCE_URL,
    permanent: false,
  },
})

export default function ExperienceRedirect() {
  return null
}
