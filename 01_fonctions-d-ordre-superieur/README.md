# Exercices: Fonctions d'ordre supérieur

Concevez les fonctions suivantes. Bonus : sans utiliser la méthode
native `forEach` ou les boucles. Les fonctions qui retournent une valeur
devraient être testées avec des tests unitaires.

**Note** : Plusieurs des fonctions ci-dessous sont *génériques* ;
c'est-à-dire qu'elles peuvent être appliquées sur des arguments de type
indéterminé, et retourner une valeur de type indéterminé. Dans ce cas,
on utilise le type `any` (en réalité, on utiliserait une variable de
type, mais cela est un concept plus avancé).

Voici par exemple la signature de la fonction `forEach` expliquée plus
bas :

```ts
function forEach(arr: any[], callback: (e: any) => void): void {
    ...
}
```

La fonction peut être appliquée sur un tableau dont les éléments sont de
type indéterminé et sur une fonction dont le paramètre est aussi de type
indéterminé.

Veuillez noter que nous utiliserons le type `any` *seulement* pour les
fonctions génériques. Sinon, on perd tous les avantages du typage
statique. Outre pour cet exercice, vous ne devriez pas utiliser `any`.

## ForEach

Une fonction `forEach` qui, étant donné un tableau et une fonction de
rappel, applique la fonction de rappel sur chaque élément du tableau.

```ts
forEach([1, 2, 3], (n) => console.log(n)); // affiche 1 2 3
```

## Map

Une fonction `map` qui, étant donné un tableau et une fonction de
rappel, applique la fonction de rappel sur chaque élément du tableau, et
retourne le tableau qui en résulte. (Vous ne pouvez pas utiliser la
méthode native `map`.) 

```ts
map([1, 2, 3], (n) => n + 1); // => [2, 3, 4]
```


## Filter

Une fonction `filter` qui, étant donné un tableau et une fonction de
rappel, applique la fonction de rappel sur chaque élément du tableau, et
retourne un tableau qui contient seulement les éléments pour lesquels la
valeur de retour de la fonction de rappel est `true`. (Vous ne pouvez
pas utilisez la fonction native `filter`.)

```ts
filter([1, 2, 3], (n) => n > 1); // => [2, 3]
```

## Constructeur

Une fonction `newAccount` qui, étant donné une balance initiale,
retourne un objet contenant une fonction pour déposer un montant
d'argent donné, et une autre pour retirer un montant d'argent donné. Les
deux fonctions doivent retourner la nouvelle balance. Il devrait être
possible de créer plusieurs comptes parallèles en appelant `newAccount`
plusieurs fois.

## Sauf

Concevez une fonction nommée `unless` qui, étant donné un prédicat et
une fonction de rappel, exécute la fonction de rappel sauf si la valeur
du prédicat est `true`.

```ts
unless(false, () => console.log("ping")); // affiche "ping"
unless(true, () => console.log("pong"));  // affiche rien
```

## Réduction

Concevez une fonction nommée `reduce` qui, étant donné un tableau, une
fonction de rappel et une valeur de départ, applique la fonction de
rappel sur chaque élément du tableau ainsi que sur la valeur de départ,
et retourne le résultat.

```ts
reduce([1, 2, 3], (a, b) => a + b, 0); // => 6
reduce(["a", "b", "c"], (a, b) => a + b, ""); // => "abc"
```

## Décorer une fonction

Concevez une fonction nommée `decorate` qui, étant donné n'importe
quelle fonction de rappel, retourne une nouvelle fonction variadique
qui, lorsque appelée, (1) écrit dans le flux de sortie « J'applique la
fonction sur les arguments \<arguments\> », (2) appelle la fonction de
rappel, (3) écrit dans le flux de sortie « Le résultat est
\<valeur-de-retour\> », puis (4) retourne le résultat de la fonction de
rappel.

```ts
add = decorate((n, m) => console.log(n + m));
add(1, 2);  // J'applique la fonction sur les arguments 1 2
            // 3
            // Le résultat est 3
```
