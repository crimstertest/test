import { test, expect } from '@playwright/test';

test('sign in page open', async ({ page }) => {
  await page.goto('https://ui.auth.puzl.cloud/sign-in/');
  await expect(page).toHaveTitle(/Sign In/);
});

test('restore page open', async ({ page }) => {
  await page.goto('https://ui.auth.puzl.cloud/sign-in?redirectTo=/dashboard');
  await page.getByRole('link', { name: 'Trouble signing in?' }).click();
  await page.getByRole('heading', { name: 'Restore password' }).click();
});

test('sign up page open', async ({ page }) => {
  await page.goto('https://ui.auth.puzl.cloud/sign-in?redirectTo=/dashboard');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('heading', { name: 'Sign Up' }).click();
});

test('login', async ({ page }) => {
  await page.goto('https://ui.auth.puzl.cloud/sign-in/');
  await page.getByLabel('E-mail required').click();
  await page.getByLabel('E-mail required').fill('gcleth@gmail.com');
  await page.getByLabel('Password required').click();
  await page.getByLabel('Password required').fill('bCJ@5t8wzXGUcx8');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Managed Services').click();
});
