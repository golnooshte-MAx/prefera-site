import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.waitForTimeout(900);

// TASK 4: all CTA links
const links = await page.evaluate(() => {
  const sel = ['.hero-cta', '.nav-cta', '.services-cta', '.cta-button'];
  const out = {};
  for (const s of sel) {
    const a = document.querySelector(s);
    out[s] = a ? { href: a.getAttribute('href'), target: a.getAttribute('target'), rel: a.getAttribute('rel') } : 'MISSING';
  }
  return out;
});
console.log('LINKS:', JSON.stringify(links, null, 2));

// TASK 3a: hero button size
const hero = await page.evaluate(() => {
  const cs = getComputedStyle(document.querySelector('.hero-cta'));
  return { fontSize: cs.fontSize, padding: cs.padding, conic: cs.backgroundImage.includes('conic-gradient') };
});
console.log('HERO CTA:', JSON.stringify(hero));

// TASK 1: services header stagger
await page.evaluate(() => document.querySelector('#services .services-header').scrollIntoView({block:'center'}));
await page.waitForTimeout(1500);
const stagger = await page.evaluate(() => {
  const hdr = document.querySelector('#services .services-header');
  const chars = document.querySelectorAll('#services .bs-char');
  return {
    isVisible: hdr.classList.contains('is-visible'),
    charCount: chars.length,
    sampleOpacity: getComputedStyle(chars[5]).opacity,
    sampleAnim: getComputedStyle(chars[5]).animationName,
  };
});
console.log('STAGGER:', JSON.stringify(stagger));
await page.locator('#services .services-header').screenshot({ path: '/tmp/svc-header.png' });

// TASK 2: process step 02 copy
const proc = await page.evaluate(() => [...document.querySelectorAll('#approach .step-desc')].map(p => p.textContent.trim())[1]);
console.log('STEP 02 DESC:', JSON.stringify(proc));

// TASK 3b: footer shiny button
await page.evaluate(() => document.querySelector('.cta-button').scrollIntoView({block:'center'}));
await page.waitForTimeout(800);
const footerBtn = await page.evaluate(() => {
  const cs = getComputedStyle(document.querySelector('.cta-button'));
  return { conic: cs.backgroundImage.includes('conic-gradient'), radius: cs.borderRadius, anim: cs.animationName, text: document.querySelector('.cta-button').textContent.trim() };
});
console.log('FOOTER CTA:', JSON.stringify(footerBtn));
const ga1 = await page.evaluate(()=>getComputedStyle(document.querySelector('.cta-button')).getPropertyValue('--gradient-angle'));
await page.waitForTimeout(600);
const ga2 = await page.evaluate(()=>getComputedStyle(document.querySelector('.cta-button')).getPropertyValue('--gradient-angle'));
console.log('FOOTER shiny animating:', ga1, '->', ga2, '=>', ga1!==ga2);
const fb = await page.locator('.cta-button').boundingBox();
await page.screenshot({ path: '/tmp/footer-shiny.png', clip: { x: fb.x-40, y: fb.y-25, width: fb.width+80, height: fb.height+50 } });
await browser.close();
console.log('done');
