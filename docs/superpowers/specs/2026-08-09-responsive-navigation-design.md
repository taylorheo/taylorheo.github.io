# Responsive navigation design

## Goal

Make the navigation visually correct at desktop and mobile widths without changing the existing menu interactions.

## Layout

- At widths above 768px, show navigation links and the language toggle in one horizontal row. Hide the mobile-only close button and social shortcuts.
- At widths of 768px and below, retain the full-screen navigation overlay. Its close button is pinned at the upper right, the navigation links and language toggle are centered, and LinkedIn and GitHub shortcuts form a horizontal pair at the bottom.
- Keep each mobile icon button at least 44 by 44 pixels, with non-overlapping spacing.

## Scope

- Update the navigation markup only if a structural wrapper is needed for stable mobile alignment.
- Adjust the related responsive CSS; preserve the existing JavaScript open/close behavior and accessibility attributes.
- Do not change page content, destinations, or desktop navigation links.

## Verification

- Confirm the close button and social shortcuts are absent from the desktop layout.
- Confirm they appear only after the mobile menu opens, with the two social icons side by side and independently tappable.
- Check the layout at desktop, tablet, and narrow-phone widths, including open and closed mobile-menu states.
