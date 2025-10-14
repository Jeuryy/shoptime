import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TooltipContent } from '@radix-ui/react-tooltip';

interface Props {
    classNmae?: string;
    iconClassName?: string;
    toolTipClassName?: string;
}

const socialLink = [
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/jeury-pierre-dide/",
        icon: <Linkedin className='w-5 h-5 hover:text-shop-light-green hoverEffect'/>,
        color: "#0077b5"
    },
    {
        title: "Github",
        href: "https://github.com/Jeuryy",
        icon: <Github className='w-5 h-5 hover:text-shop-light-green hoverEffect'/>,
        color: "#4078c0"
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/jeury_pd/",
        icon: <Instagram className='w-5 h-5 hover:text-shop-light-green hoverEffect'/>,
        color: "#e95950"
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/jeury.dide.794/?locale=es_ES",
        icon: <Facebook className='w-5 h-5 hover:text-shop-light-green hoverEffect'/>,
        color: "#1877F2"
    },
    {
        title: "Twitter",
        href: "https://twitter.com/jeury102002",
        icon: <Twitter className='w-5 h-5'/>,
        color: "#1da1f2"
    },
]



const SocialMedia = ({className, iconClassName, toolTipClassName}) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-4", className)}>
        {socialLink?.map(e => (
            <Tooltip key={e?.title}>
                <TooltipTrigger asChild>
                    <Link key={e?.title} 
                        href={e?.href} 
                        target='_blank'
                        className={cn("text-red-50 p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect",
                        iconClassName
                        )}
                        rel='noopener noreferrer'>
                    {e?.icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn(`text-sm text-shop-light-green font-normal`)}>
                        {e?.title}
                </TooltipContent>
            </Tooltip>
        ))}    
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia