import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/#capabilities',
    permanent: false,
  },
})

export default function PricingRedirect() {
  return null
}
