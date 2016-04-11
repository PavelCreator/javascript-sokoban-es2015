<h1>JavaScript demo of skills (ES2015, Grunt, npm, OOP in prototype style)</h1>
<h3>Sokoban is a type of transport puzzle, in which the player pushes boxes or crates around in a warehouse, trying to get them to storage locations.</h3>
<h3><a href="http://melomance.net/sokoban/">Full demo</a></h3>
<h3>Functionality:</h3>
<ul>
  <li>Online implementation of <strong>Sokoban original game</strong> (1982) with <strong>60 levels</strong></li>
  <li>The game is controlled with the <strong>keyboard</strong> or <strong>mouse</strong></li>
  <li>Completed levels and user results are <strong>stored</strong> in LocalStorage and <strong>displayed</strong> in the list of levels</li>
  <li>User can <strong>restore</strong> the last 20 steps</li>
  <li><strong>Routing</strong> is tied to levels, navigation by hash</li>
  <li><strong>Сounting steps</strong></li>
</ul>

<h3>Programming:</h3>
<ul>
  <li>Project written on Vanilla JS <strong>without jQuery</strong></li>
  <li>The system is collected automatically using <strong>npm</strong></li>
  <li>Auto deploy using <strong>Grunt</strong></li>
  <li><strong>JS-OOP</strong> in prototype style</li>
</ul>

<h4>Grunt processing:</h4>
<ul>
  <li><strong>ES2015</strong> - collected from the files pack, minimized, unglifyed and processed with Babel</li>
  <li><strong>SCSS</strong> - conveted in CSS, minimized</li>
  <li><strong>HTML</strong> - minimised</li>
  <li><strong>Images</strong> - optimized</li>
  <li>Written <strong>watchers</strong> for separate parts and "Packs"</li>
</ul>

<h4>Deploy:</h4>
<ul>
<li>1) install all node modules. Enter in console:
<strong>npm install</strong></li>
<li>2) make build
<br><strong>grunt</strong> - to generate ES2015 build
</ul>
