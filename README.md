67272 Vue.js Demo Files
---

Started with an overview of reactive javascript frameworks in general and [Vue.js site](https://vuejs.org/) in particular.  Then reviewed the lifecycle of a Vue.js instance by talking through the diagram in this repo (taken from [Vue.js site](https://vuejs.org/v2/guide/instance.html)).

After this, we walked through five simple examples that build on each other. There are four examples designed to show the following:

01. Simple data binding example.  All we are trying to show here is how two-way data binding works. After creating a simple Vue instance, we connect it to the input box via `v-model` and then use the mustache syntax `{{ }}` to display the data from the instance.

02. Simple list building example. The key points here related to some of the other vue directives.  Used `v-for` to iterate through an array of items and `v-text` to display the results (could have used the mustache syntax).  Used `v-on` to attach a method call (in this case, `addHero()`) to an event handler (in this case, `onClick`) and then `v-bind` to connect an attribute (like class or title) to a vue property. 

03. Reading from API data and displaying with Vue. This is very similar to the second demo, except that this time the data is not a predetermined list of superheroes but data gathered from an external API.  

04. Components demo. Discussed the very simple `hero` component and demo'd it with the `<hero>The Tick</hero>` example. Then incorporated this component into the `hero-list` component.

05. Tabs component demo. This is probably the most substantive example, but as we mentioned at the beginning, the real benefit is that it makes the tabs markup much easier to understand. (Contrast `tabs_demo.html` tabs with the regular tab markup at [http://materializecss.com/tabs.html](http://materializecss.com/tabs.html) and it's clear that the tabs component makes our markup easier to read and maintain.)

After walking through the tab demo and talking about the value of components, we applied this to the [PATS_v2](https://github.com/profh/67-272-S18-67272_PATS_v2) project.