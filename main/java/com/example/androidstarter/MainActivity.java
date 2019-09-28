package com.example.androidstarter;

import androidx.appcompat.app.AppCompatActivity;
import com.example.androidstarter.ActivityStarter;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    TextView text;
    Button button;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        text = findViewById(R.id.textView1);

        text.setText("kanta laga !!");

        button = findViewById(R.id.button);


        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ActivityStarter.class);
                intent.putExtra("name", "Mansoor");
                startActivity(intent);
            }
        });

    }
}
