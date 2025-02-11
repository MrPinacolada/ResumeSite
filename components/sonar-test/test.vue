<script setup lang="ts">
// ⚠️ Неиспользуемые переменные
const UNUSED_CONSTANT = "I will never be used";
let unusedLetVariable;
var globalVarInsideScriptSetup = "Bad practice";

// ⚠️ Плохие названия переменных
const THIS_IS_BAD = 123;
let Also_Bad_Naming = "error";

// ⚠️ Логическая ошибка (условие всегда true)
function alwaysTrueCondition() {
  if (true) {
    return "This will always execute";
  }
}

// ⚠️ Цикл, который ничего не делает
for (let i = 0; i < 10; i++) {}

// ⚠️ Перезапись переменной без использования
let pointlessValue = 100;
pointlessValue = 200;

// ⚠️ Использование `eval()`, что небезопасно
function runEval() {
  eval("console.log('Dangerous!')");
}

// ⚠️ Массив с повторяющимися ключами (нарушение в `v-for`)
const items = [
  { id: 1, name: "Item 1" },
  { id: 1, name: "Item 2" }, // Дубликат ключа!
  { id: 2, name: "Item 3" }
];

// ⚠️ Плохая работа с `v-html` (возможна XSS-уязвимость)
const dangerousHTML = "<script>alert('XSS!');</script>";
</script>

<template>
  <div>
    <!-- ⚠️ Дублирующийся `key` (ошибка в `v-for`) -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <!-- ⚠️ Неиспользуемые переменные -->
    <p>{{ unusedLetVariable }}</p>
    
    <!-- ⚠️ Бессмысленный `v-if` (всегда true) -->
    <div v-if="true">
      This will always render
    </div>

    <!-- ⚠️ Пустой `v-for` -->
    <div v-for="i in 5"></div>

    <!-- ⚠️ Использование `eval()` внутри шаблона -->
    <button @click="eval('alert(\'Bad practice\')')">Run Eval</button>

    <!-- ⚠️ Инлайн-функция в `@click` (антипаттерн) -->
    <button @click="(e) => console.log(e)">Inline Click</button>

    <!-- ⚠️ Некорректное использование `v-bind:key` -->
    <div v-bind:key="123">This should not have a key</div>

    <!-- ⚠️ `v-html` с потенциально опасным кодом -->
    <div v-html="dangerousHTML"></div>

    <!-- ⚠️ Бессмысленный `:class="true"` -->
    <div :class="true">This has an invalid class binding</div>

    <!-- ⚠️ Лишние `div`, можно упростить -->
    <div>
      <div>
        <div>
          <p>Too much nesting</p>
        </div>
      </div>
    </div>
  </div>
</template>
