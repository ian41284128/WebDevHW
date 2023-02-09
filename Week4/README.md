## Complex recipe site wireframe analysis 
### ["Spicy Gluten-Free Chicken and Cheddar Waffles with Blackberry-Maple Syrup" from *allrecipes*](https://www.allrecipes.com/recipe/268796/spicy-gluten-free-chicken-and-cheddar-waffles-with-blackberry-maple-syrup/)

The page body is broken up into a **header**, **main**, and **footer**. The **header** is locked at the top of the web browser at all times, while the **footer** scrolls normally and is just at the bottom of the page.

The **main** contains an **article**, and a more recipes **section**. The **article** is broken up into five **divs** with class names to indicate what part of the article body they are. Each div is broken up into sub-**divs** with ids, and each sub-**div** holds whatever content it's supposed to hold (lists, spans, more divs, etc).

### Structural Diagram

    <body>
        <header></header>
        <main>
            <article>
                <div class="article-subsection">
                    <h1 id="subsection-component">
                    <div id="subsection-component">
                    <span id="subsection-component">
                    <ul id="subsection-component">
                    <ol id="subsection-component">
                </div>
            </article>
            <section></section>
        </main>
        <footer>
            <div class="component">
            <div class="component">
        </footer>
    </body>