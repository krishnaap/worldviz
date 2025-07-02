fetch('data/weather/current/current-wind-surface-level-gfs-1.0.json')
  .then(res => res.json())
  .then(windData => {
    var windy = new Windy({
      canvas: document.getElementById('…'),
      data: windData
    });
    windy.start(bounds, width, height, extent);
  });
