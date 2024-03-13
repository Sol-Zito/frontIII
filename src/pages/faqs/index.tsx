import Layout from "@/component/layout/Layout";
import { faqs } from "@/data/faqs";
import { Faq } from "@/interface/faq";
import { getFaqs } from "@/services/getFaqs";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface FaqsPageProps {
  faqs: Faq[];
}

export const FaqsPage: NextPage<FaqsPageProps> = ({ faqs }) => {
  return (
    <Layout
      title="Preguntas frecuentes"
      description="Pagina de preguntas f"
      key="pf"
    >
      <section>
        <h1></h1>
        <div>
          {faqs.map((f) => (
            <div>
              <p>{f.question}</p>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const faqs = await getFaqs();

  return {
    props: {
      faqs,
    },
  };
};
