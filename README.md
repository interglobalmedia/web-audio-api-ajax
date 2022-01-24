## Confetti By Sound And Color

### An Built with confetti-js, Math.random(), the Web Audio API, AJAX, and Node.js

### How to use:

-   `git clone` the **repository** to your **desktop** with the **_following_**
    `command` if using `SSH`:

```shell
git clone git@github.com:interglobalmedia/web-audio-api-ajax.git
```

If using `HTTPS`:

```shell
git clone https://github.com/interglobalmedia/web-audio-api-ajax.git
```

### User Story:

-   When the **user** **_clicks_** on the `Start` **button**, a `song`
    **_starts_** **playing**, the `background color` of the **page**
    **_changes_** **color**, `confetti` starts **_falling_**, and the
    `background color` and `color` of the `Start` **button** **_changes_**.

-   When the **user** **_clicks_** on the `Stop` **button**, the `song`
    **_stops_** **playing** (paused), the `background color` of the **page**
    **_changes_** **color**, `confetti` starts **_falling_**, and the
    `background color` and `color` of the `Stop` **button** **_changes_**.

-   When the **user** **_clicks_** on the `Refresh` **button**, everything goes
    back to its **_default_** **state**. The `background color` of the **page**
    **_goes back_** to `white`, the `confetti` **disappears**, and the
    `background color` of the `buttons` **_reverts_** to their **default
    states** of `white`, and the `color` of the **buttons** **_reverts_** to
    their **default states** of of `black`.

### Tools/Packages Used:

-   `npm`

-   `npm` **package** `node-sass` to **_enable_** using `Sass` for the **project
    styling**

-   `npm` **package** `gh-pages` to **_enable_** the `automatic deployment` of
    the **application** to `gh-pages`.

-   `cdnjs` of `confetti-js` **npm package** which **_automatically_**
    **generates** an **animated** `confetti` **effect** on the **_page_**.

-   The `Web Audio API`, which is **_responsible_** for the **generation** of
    the **_music_**.

-   `AJAX` (`Asynchronous JavaScript and XML`), to make a **request** to the
    (local) `Audio1` **file** in the **form** of an `arraybuffer`, which is
    **_decoded_** on `page load`.

### Scripts:

`npm run scss`: **watches** for **_changes_** in `styles/scss/main.scss` and
**outputs** them into `styles/css/main.css`.

`npm run clean`: **_removes_** the **old** `dist` **folder** and **_replaces_**
it with a **new one** **_containing_** latest **changes**.

`npm run build`: **_creates_** a **new** `dist` **build**.

`npm run deploy`: **_deploys_** the **contents** of the `dist` **folder** to
`gh-pages`.
