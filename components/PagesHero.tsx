import React from 'react'


interface Props{
    subtitle: string;
    title: string;
    description: string;
}


function PagesHero({ subtitle, title, description,  }: Props) {
  return (
    <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 pb-24 pt-30 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">{subtitle}</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance">{title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{description}</p>
        </div>
      </section>
  )
}

export default PagesHero