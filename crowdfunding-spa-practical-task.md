# Crowdfunding SPA

## Overview

Build an SPA based on the [**Crowdfunding**](https://www.figma.com/design/FXH4IrR8Vho44BpcloBNfc/DEMO-for-Dima-Bukovsky?node-id=1-20136&t=dk8EZ1jdl8ce8Qkm-0) [Figma](https://www.figma.com/design/FXH4IrR8Vho44BpcloBNfc/DEMO-for-Dima-Bukovsky?node-id=1-20136&t=dk8EZ1jdl8ce8Qkm-0) design.

The application represents a service where users can browse land/farming investment opportunities, search and filter them, and view available projects both as cards and on an interactive map.

Use:

- React + JavaScript
- React Router
- Redux Toolkit
- RTK Query
- DummyJSON API
- Webpack
- Native CSS

DummyJSON data may be adapted to fit the Crowdfunding domain. Small local datasets may be used for fields missing from the API, such as coordinates or location details.

---

## Pages

Required routes:

```text
/login
/
/locations
/shop
```

`/login` is public.

All main application routes are protected and require authentication.

---

# 1. Login Page — `/login`

There is no Login screen in Figma, so create a simple page consistent with the existing Crowdfunding design.

Use the same:

- colors;
- typography;
- buttons;
- spacing;
- input styles;
- border radius.

The page should contain:

- Username field;
- Password field;
- Login button;
- validation messages;
- API error message.

Both fields are required.

During login:

- send the request through DummyJSON Auth API;
- show a loading state;
- disable repeated submission;
- display an error for invalid credentials.

Working test credentials must be added to README.

After successful authentication:

1. save the authenticated user state;
2. redirect the user to `/`.

If an already authenticated user opens `/login`, redirect them to `/`.

Session persistence after browser refresh is **Extra**.

---

# 2. Home Page — `/`

Implement the first Crowdfunding Figma screen.

The page serves as an entry point to the application and introduces the available projects.

## Required sections

### Header

Use a shared Header across the application.

It should contain the relevant navigation items from Figma, for example:

```text
Home
Shop
User
```

The active route should be visually distinguishable where appropriate.

The user/avatar area should represent the authenticated user.

### Hero Section

Implement the main visual section from the design:

- heading;
- supporting text;
- main image/illustration;
- CTA button.

The primary CTA should navigate to:

```text
/locations
```

### Featured Projects

Display several projects received from the API.

For example, show the first 3–4 projects.

Each card should include the information represented in the Figma design, such as:

- image;
- title;
- location/category;
- short description;
- price or investment value.

The same project data model should later be reused on Locations and Shop where appropriate.

The Home Page should not contain a separate hardcoded list of projects unrelated to the API.

---

# 3. Locations Page — `/locations`

This is the main interactive page of the application.

Projects must be displayed simultaneously in two views:

```text
Project List
+
Interactive Map
```

Both views must represent the same set of projects.

---

## 3.1 Search

Implement the search input from the design.

The Figma suggests geographical search such as:

```text
Search by city, country, region, place
```

If suitable geographical data is not available from DummyJSON, the search may work with adapted fields such as:

- project title;
- city;
- country;
- region;
- category.

Search must affect both:

- displayed project cards;
- map markers.

If the search returns no results, show an Empty State.

Clearing the search should restore the complete result set.

---

## 3.2 Filters

Implement at least one functional filter.

Possible examples:

```text
Category
All / Farming / Vegetables / Land
```

or:

```text
Price
All / Under $100 / $100–500 / Over $500
```

Filters must affect both the list and map. The user must be able to reset active filters. Search and filters must work correctly together.

---

## 3.3 Sorting

Implement sorting for the project list.

Minimum options:

```text
Price: Low to High
Price: High to Low
```

Additional options such as rating or name are optional. Sorting should change the order of the cards without breaking active search or filters. Sorting does not need to change marker positions on the map.

---

## 3.4 Project List

Display projects as cards in the left/list area of the page.

Each card should contain relevant information from the design, such as:

- image;
- title;
- location;
- project type/category;
- price;
- additional short information.

Cards should have clear interactive states:

- hover;
- selected;
- active where applicable.

The layout should remain usable if the number of results changes after search/filtering.

---

## 3.5 Interactive Map

Use a map library such as React Leaflet or an equivalent solution.

Each currently displayed project must have a corresponding map marker.

If DummyJSON does not provide suitable coordinates, use a local structured dataset linked to each project by ID.

Example:

```js
{
  projectId: 1,
  latitude: 51.5072,
  longitude: -0.1276
}
```

Do not hardcode coordinates directly inside JSX.

---

## 3.6 Card ↔ Marker Interaction

The project list and map must be synchronized.

### Marker selection

When the user selects a marker:

- the related project becomes selected;
- the corresponding card is visually highlighted.

### Card selection

When the user selects a card:

- the corresponding marker becomes selected/highlighted.

Only one project can be selected at a time.

Selecting another project should clear the previous selection.

### Extra

Optional improvements:

- map popup with short project information;
- automatic scroll to the selected card;
- center the map on the selected marker;
- change map zoom;
- synchronize hover between cards and markers.

---

## 3.7 Empty / Loading / Error States

The Locations page must handle:

### Loading

Show a loader or skeleton while data is loading.

### Empty

Show a clear empty state when search or filters return no projects.

### Error

Display a meaningful API error message without breaking the whole application.

---

# 4. Shop Page — `/shop`

Implement the Shop screen from Figma.

Unlike Locations, Shop focuses on browsing projects as a catalogue.

```text
Locations → List + Map
Shop      → Card Grid
```

The same API project source should be reused.

---

## 4.1 Catalogue Grid

Display projects in a responsive grid.

Each card should contain relevant design data:

- project image;
- title;
- location/category;
- price;
- additional attributes shown in Figma.

The grid should adapt to different screen sizes.

Example behaviour:

```text
Desktop → multiple columns
Tablet  → fewer columns
Mobile  → one or two columns
```

The exact number of columns should follow the design where possible.

---

## 4.2 Shop Filters

The filter controls visible in the Figma should be functional.

At minimum implement:

- one filter;
- sorting.

For example:

```text
Category
Price
```

and:

```text
Price: Low to High
Price: High to Low
```

The logic may be reused from Locations where appropriate.

If a filter combination returns no data, show an Empty State.

---

## 4.3 Product / Project Data

Shop and Locations must not maintain independent copies of the same API data.

Both pages should use the same project model and API source.

Different presentation components are allowed if the design requires different layouts.

---

# 5. Header and Navigation

The Header should be shared across the main pages.

Required functional navigation:

```text
Home
Locations
Shop
User / Logout
```

If Figma contains additional items such as:

```text
Contacts
Wallet
My plots
```

they may remain outside the task scope.

Do not create empty pages only to match every navigation item from the design.

The current page should be visually clear where appropriate.

---

# 6. Authentication

Use DummyJSON Auth API for basic authentication.

Protected routes:

```text
/
/locations
/shop
```

If an unauthenticated user opens one of these routes directly, redirect them to:

```text
/login
```

## Current User

Use the user/avatar area from the Header.

After login, display the authenticated user state.

A simple dropdown may include:

```text
User Name
Email
Logout
```

## Logout

Logout must:

- clear the authenticated user state;
- redirect to `/login`;
- prevent further access to protected routes until the next login.

Registration, OAuth, roles, permissions and a full refresh-token flow are not required.

---

# 7. DummyJSON Data

Use DummyJSON `products` as the main source for crowdfunding projects.

The API model may be adapted:

```text
DummyJSON       Crowdfunding

Product      →  Project / Plot
title        →  title
description  →  description
thumbnail    →  image
price        →  investment/rental value
category     →  project type
rating       →  rating
```

The UI should use Crowdfunding terminology rather than DummyJSON product terminology.

Local structured data may supplement:

- coordinates;
- city;
- country;
- region;
- plot size.

---

# 8. Required Functionality

- Login Page
- Home Page
- Locations Page
- Shop Page
- React Router
- Protected routes
- DummyJSON integration
- RTK Query
- Redux Toolkit
- Authentication
- Current user state
- Logout
- Featured projects
- Project cards
- Interactive map
- Map markers
- Card ↔ marker synchronization
- Search
- At least one filter
- Sorting
- Loading state
- Error state
- Empty state
- Responsive layout
- Main Figma design implementation

---

# 9. Extra

Optional improvements:

- session persistence after refresh;
- redirect to the originally requested route after login;
- map popup;
- auto-scroll to selected card;
- map centering / zoom;
- Card ↔ Marker hover synchronization;
- debounced search;
- URL search params;
- pagination / Load More;
- Project Details Page;
- skeleton loaders.
