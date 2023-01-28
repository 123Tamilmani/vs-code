package java;

class Classtwo
{
    public static void main(String args[])
    {
        Classone obj = new Classone();
        // System.out.println(obj.age);
        // System.out.println(obj.name);
        obj.display();
    }
}

class Classone
{
    int age = 20;
    String name = "Tamilmani";

    void display()
    {
        System.out.println(age+""+name);
    }
}