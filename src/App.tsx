/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AtsComparison } from './components/AtsComparison';
import { SamplesSection } from './components/SamplesSection';
import { AtsChecker } from './components/AtsChecker';
import { PricingSection } from './components/PricingSection';
import { OrderForm } from './components/OrderForm';
import { AboutFeras } from './components/AboutFeras';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { InstallAppModal } from './components/InstallAppModal';

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('standard');
  const [isSampleModalOpen, setIsSampleModalOpen] = useState<boolean>(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);

  const handleScrollToOrder = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    const orderSection = document.getElementById('order-form-section');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToChecker = () => {
    const checkerSection = document.getElementById('ats-checker');
    if (checkerSection) {
      checkerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSamples = () => {
    setIsSampleModalOpen(true);
  };

  const handleOpenInstall = () => {
    setIsInstallModalOpen(true);
  };

  const handlePreFillFromChecker = (jobTitle: string, notes: string) => {
    handleScrollToOrder();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header 
        onOpenOrder={() => handleScrollToOrder()}
        onOpenSamples={handleOpenSamples}
        onOpenInstallModal={handleOpenInstall}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onOrderClick={() => handleScrollToOrder()}
          onViewSamplesClick={handleOpenSamples}
          onCheckerClick={handleScrollToChecker}
        />

        {/* Why Choose Us */}
        <WhyChooseUs 
          onOrderClick={() => handleScrollToOrder()}
        />

        {/* ATS System Comparison */}
        <AtsComparison />

        {/* Real Live ATS CV Samples Showcase */}
        <SamplesSection 
          onOpenSampleModal={handleOpenSamples}
          onSelectSampleForOrder={(sampleTitle) => handleScrollToOrder()}
        />

        {/* Interactive ATS Readiness Pre-Checker */}
        <AtsChecker 
          onPreFillOrder={handlePreFillFromChecker}
        />

        {/* Pricing & Packages */}
        <PricingSection 
          onSelectPackage={(pkgId) => handleScrollToOrder(pkgId)}
        />

        {/* Order Form & WhatsApp Message Generator */}
        <OrderForm 
          initialPackageId={selectedPackageId}
        />

        {/* About Consultant Feras Abdellatif */}
        <AboutFeras />

        {/* Success Stories & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenInstallModal={handleOpenInstall}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Full Screen ATS CV Sample Modal */}
      <SamplePreviewModal 
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onSelectPackageForOrder={(pkgId) => {
          setIsSampleModalOpen(false);
          handleScrollToOrder(pkgId);
        }}
      />

      {/* Android PWA / Play Store Installation Modal */}
      <InstallAppModal 
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />
    </div>
  );
}
