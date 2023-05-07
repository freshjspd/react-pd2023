import React from 'react';
import { LogoContext } from '../../contexts';

export default function AboutUs() {
  return (
    <LogoContext.Consumer>
        {logo => {
            return(
                <div>
                    <h2>I am {logo.name}</h2>
                    <h4>{logo.greeting}</h4>
                    <p>Visit us <a href={logo.url} target='blank'>site</a></p>
                </div>
            )
        }}
    </LogoContext.Consumer>
  )
}