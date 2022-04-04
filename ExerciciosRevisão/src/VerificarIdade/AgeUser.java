package VerificarIdade;

import javax.swing.JOptionPane;

public class AgeUser {

	public static void main(String[] args) {
		
		int age;
		age = Integer.parseInt(JOptionPane.showInputDialog("How old are you?"));
		
		if(age> 0 && age<=11) {
			System.out.print("you're a child");
		}
		
		else if (age>= 12 && age<=17) {
			System.out.print("you're a adolescent");
		}
		
		else if (age>= 18 && age<=60) {
			System.out.print("you're a adult");
		}
		
		else if (age>=61 && age<=115) {
			System.out.print("you're a old");
		}
		
		else {
			System.out.print("error age invalidates!");
		}
	}

}
