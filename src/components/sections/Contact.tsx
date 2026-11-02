import React from 'react'
import MainLayout from '../layout/MainLayout'
import Layout from '../layout/Layout'
import { BuildCard } from '../ui/Contact/BuildCard'
import { ContactCard } from '../ui/Contact/ContactCard'
import { SocialLink } from '../ui/Contact/SocialLinks'
import { FaLinkedin } from 'react-icons/fa6'

export const Contact = () => {
  return (
    <MainLayout className="flex flex-col justify-center">
      <Layout
        number="04"
        label="START A CONVERSATION"
      >
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            <div className="flex lg:col-span-7">
                <BuildCard />
            </div>

            <div className="flex lg:col-span-5">
                <ContactCard />
            </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 mt-5">
            <div className="flex lg:col-span-6">
                <SocialLink />
            </div>

            <div className="flex lg:col-span-6">
                <SocialLink
                    platform="LinkedIn"
                    url="https://linkedin.com/in/username"
                    icon={FaLinkedin}
                />
            </div>
        </div>
      </Layout>
    </MainLayout>
  )
}