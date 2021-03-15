const pages = {
  wallpaper: String(
    `
      <div class="wallpaper">
        <span>
          <Clock
          className={css.ukFormat}
          format={'h:mm:ssa'}
          style={{fontSize: '1.5em'}}
          ticking={true} />
          <h3>Anime.</h3>
        </span>
      </div>

      <video muted loop>
        <source src="./assets/background.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
    `
  ),

  main: String(
    `
      <div class="main">
          <span class="text-welcome">Welcome&nbsp;</span>
          <span class="text-to">to&nbsp;</span>
          <span class="text-interactive">Interactive&nbsp;</span>
          <span class="text-wallpaper">Wallpaper&nbsp;</span>
      </div>
    `
  ),
};
