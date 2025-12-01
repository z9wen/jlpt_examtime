import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const SEO = ({
  title = 'JLPT 考试计时器 - 日本语能力测试专业模拟工具',
  description = '专业的 JLPT 日本语能力测试考试计时器，支持 N1、N2、N3、N4、N5 全级别。真实模拟考试流程，精确计时，帮助备考生熟悉考试节奏。',
  keywords = 'JLPT, 日语考试, 考试计时器, 日本语能力测试, N1, N2, N3, N4, N5, 模拟考试',
  ogImage = '/og-image.png',
  canonical,
}: SEOProps) => {
  useEffect(() => {
    // 更新 title
    document.title = title;

    // 更新或创建 meta 标签
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // 基础 meta 标签
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);

    // Twitter
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};
