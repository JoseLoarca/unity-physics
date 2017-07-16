#pragma strict

public var points : int = 50;

function OnTriggerEnter2D(other	: Collider2D)
{
	Debug.Log("Triggered! Worth " + points + " points.");

	Destroy(gameObject);
}
