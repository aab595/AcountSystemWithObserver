# AcountSystemWithObserver
This is a simple project that allow us to make practice all knowledge we already get in Observer Design Pattern

Our use case here is an **Account System**. 

The **subject** we have to observe (`Caisse.ts`) is the set of balance and transactions.
The user can add a transaction using a form. Each time he clicks on **add** button, he will see synchronously informations in observers components.

For the **observers**, we've there three : `ListTrans.ts`, `NbTrans.ts`, `Solde.ts` and `Info.ts`
