
body {
  font-family: sans-serif;
  text-align: center;
  background: #f3f3f3;
}

h1 {
  font-size: 2.5em;
  margin-top: 20px;
}

.blender-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 40px;
}

#blender, #drop-zone {
  width: 150px;
  height: 150px;
  border: 2px dashed #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  background: #fff;
}

.items {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px;
  flex-wrap: wrap;
}

.item {
  background: #fffc;
  padding: 10px;
  border: 1px solid #aaa;
  cursor: grab;
  font-size: 1.2em;
  border-radius: 8px;
}

#blend-button {
  padding: 10px 20px;
  font-size: 1.1em;
  margin-top: 20px;
  cursor: pointer;
}

#result {
  margin-top: 20px;
  font-size: 1.5em;
  min-height: 40px;
}
