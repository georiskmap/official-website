<template>
  <Navbar />
  <section class="bg-[#0E1C16]">
    <KatchaHeader />
    <PressScatter />
    <TheSeed />
    <FarmerVoices />
    <MapRoom />
    <KatchaMedia />
    <ArticlesGrid />
    <FieldGallery />
    <ClosingCall />
    <KatchaPartners />
  </section>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import KatchaHeader from '@/components/katcha/KatchaHeader.vue'
import PressScatter from '@/components/katcha/PressScatter.vue'
import TheSeed from '@/components/katcha/TheSeed.vue'
import FarmerVoices from '@/components/katcha/FarmerVoices.vue'
import MapRoom from '@/components/katcha/MapRoom.vue'
import KatchaMedia from '@/components/katcha/KatchaMedia.vue'
import ArticlesGrid from '@/components/katcha/ArticlesGrid.vue'
import FieldGallery from '@/components/katcha/FieldGallery.vue'
import ClosingCall from '@/components/katcha/ClosingCall.vue'
import KatchaPartners from '@/components/katcha/KatchaPartners.vue'
import Footer from '@/components/Footer.vue'
import { usePageHead } from '@/utils/usePageHead'

usePageHead({
  title: 'Katcha Ward: Outlasting the Flood',
  description:
    'How GRMI paired six years of Sentinel-1 flood mapping with FARO 67, a submergence-tolerant rice, for farmers on the River Niger floodplain in Katcha Ward, Niger State.',
  keywords: [
    'GRMI',
    'Katcha Ward',
    'Niger State',
    'FARO 67',
    'Submergence-tolerant rice',
    'Flood Risk Mapping',
    'Sentinel-1',
    'Earth Observation',
    'Disaster Risk Reduction',
    'Sendai Framework',
    'Food Security'
  ]
})
</script>

<style scoped></style>
