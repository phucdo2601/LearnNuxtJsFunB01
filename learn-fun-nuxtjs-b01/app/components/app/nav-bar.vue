<template>
  <nav>
    <ul>
      <li><strong>
         <NuxtLink to="/">
					<strong>Tasks App</strong>
				</NuxtLink>
      </strong></li>
    </ul>
    <ul>
      <li>
        <NuxtLink :to="{
            name: 'create'
        }"> Create Task </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
