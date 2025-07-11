"use client";

 
import Link from 'next/link';
import { Eye } from 'lucide-react';
import Image from 'next/image';

const albums = [
  {
    slug: 'wedding-album-design',
    title: 'Wedding Album Design',
    author: 'Telugu Photoshop guruji',
    views: 14900,
    image: '/Images/4.jpg',
  },
  {
    slug: 'album-designing-engagement',
    title: 'Album Designing_Engagement',
    author: 'Harish Raj',
    views: 733,
    image: '/Images/4.jpg',
  },
  {
    slug: 'wedding-album-template',
    title: 'Wedding Album Template',
    author: 'Rahul Telbhare',
    views: 281,
    image: '/Images/5.jpg',
  },
  {
    slug: 'album-designs-dhanu',
    title: 'Album Designs',
    author: 'Dhanu Gunawardhana',
    views: 13500,
    image: '/Images/6.jpg',
  },
];

export default function Biography() {
  return (
    <>
      
      
  
      

      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
