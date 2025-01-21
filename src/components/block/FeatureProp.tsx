

import React from 'react'

interface Feature {
    text: string;
}

export const Feature: React.FC<Feature> = ({text,}) => {

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
    
  return (
                  
                    <div className="w-[100%] border-white95 border-[1px] px-[15px] py-[10px] rounded-md flex items-center gap-[8px]">                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 bg-orange95 text-grey15 p-[4px]">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" /> 
                    </svg>
                      <p>{text}</p>
                    </div>
  )
}

export const NoFeature: React.FC<Feature> = ({text,}) => {
      
    return (
                    
                      <div className="w-[100%] border-white95 border-[1px] px-[15px] py-[10px] rounded-md flex items-center gap-[8px]">                    
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-grey15 p-[4px] border-[1px] border-white95">
                      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                        <p>{text}</p>
                      </div>
    )
  }
  