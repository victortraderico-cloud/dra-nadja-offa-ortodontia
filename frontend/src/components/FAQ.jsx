import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../data/mock';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Perguntas Frequentes
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas Comuns
          </h2>
          <p className="text-xl text-gray-600">
            Encontre respostas para as principais perguntas sobre ortodontia
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="bg-gradient-to-br from-white to-[#F0F3FA]/20 border-2 border-[#D5DEEF]/50 rounded-2xl px-6 hover:border-[#638ECB] transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#395886] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#F0F3FA] to-[#D5DEEF] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco pelo WhatsApp. Teremos prazer em ajudar!
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Tenho algumas dúvidas sobre ortodontia.", '_blank')}
            className="inline-flex items-center bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Fale Conosco no WhatsApp
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
