"use client";

import { Button } from './ui/button';
import { motion } from 'motion/react';

export function HeroSection() {
  const openGitHub = () => {
    window.open('https://github.com/ldhbenecia', '_blank');
  };

  const openBlog = () => {
    window.open('https://velog.io/@ldhbenecia', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6">
            <span className="text-xl text-muted-foreground">안녕하세요.</span>
          </div>
          
          <div className="mb-8">
            <h1 className="mb-4">
              <span className="text-primary">Server Developer</span><br />
              임동혁입니다.
            </h1>
          </div>
          
          <p className="text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-lg">
            화가는 볼 수 없는 상상 속의 풍경을 그려낼 수 있고, <br /> 
            작가는 경험하지 못한 것들을 글로 풀어낼 수 있습니다. <br />
            저는 존재하지 않는 무언가를 창조해낼 수 있다고 믿어 개발을 즐겁게 하고 있습니다.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" onClick={openGitHub}>
              GitHub
            </Button>
            <Button variant="outline" size="lg" onClick={openBlog}>
              Blog
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}